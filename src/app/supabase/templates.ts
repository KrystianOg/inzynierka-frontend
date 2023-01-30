import supabaseApi from './supabase'
import supabase from 'utils/supabaseClient'
import { AddTemplate, Template } from 'types/templates'

const templateApi = supabaseApi.injectEndpoints({
    endpoints: build => ({
        getTemplates: build.query<Template[], void>({
            queryFn: async () => {
                const { data, error } = await supabase.from('templates').select()
                return data
                    ? { data }
                    : { error }
            }
        }),
        createTemplate: build.mutation<number, AddTemplate>({
            queryFn: async (template) => {
                const { error, status} = await supabase.from('templates').insert([
                    template
                ])
                return !error
                    ? { data: status }
                    : { error }
            }
        }),
        updateTemplate: build.mutation<number, Partial<Template> & { id: string }>({
            queryFn: async ({id, ...patch}) => {
                const { error, status } = await supabase.from('templates').update(patch).eq('id', id)

                return !error
                    ? { data: status }
                    : { error }
            },
            onQueryStarted({ id, ...patch}, { dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    templateApi.util.updateQueryData('getTemplates', undefined, (draft) => {
                        const index = draft.findIndex((template) => template.id === id)
                        if (index !== -1) {
                            Object.assign(draft[index], patch)
                        }
                    })
                )
                queryFulfilled.catch(patchResult.undo)
            },
            invalidatesTags: ['Template']
        }),
        deleteTemplate: build.mutation<number, string>({
            queryFn: async (id) => {
                const { error, status } = await supabase.from('templates').delete().eq('id', id)

                return !error
                    ? { data: status }
                    : { error }
            },
            onQueryStarted(id, { dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    templateApi.util.updateQueryData('getTemplates', undefined, (draft) => {
                        const index = draft.findIndex((template) => template.id === id)
                        if (index !== -1) {
                            draft.splice(index, 1)
                        }
                    })
                )
                queryFulfilled.catch(patchResult.undo)
            },
            invalidatesTags: ['Template']
        })
    })
})

export const {
    useGetTemplatesQuery,
    useCreateTemplateMutation,
    useUpdateTemplateMutation,
    useDeleteTemplateMutation
} = templateApi