import supabaseApi from './supabase'
import supabase from 'utils/supabaseClient'
import { AddTemplate, Template } from 'types/templates'

const templateApi = supabaseApi.injectEndpoints({
    endpoints: build => ({
        getTemplates: build.query<Template[], void>({
            queryFn: async () => {
                const { data, error } = await supabase.from('templates').select()

                if (error) return { error: error.message }

                return { data }
            }
        }),
        createTemplate: build.mutation<number, AddTemplate>({
            queryFn: async (template) => {
                const { error, status} = await supabase.from('templates').insert([
                    template
                ])

                if (error) return { error: error.message }

                return { data: status}
            }
        }),
        updateTemplate: build.mutation<number, Partial<Template> & { id: string }>({
            queryFn: async ({id, ...patch}) => {
                const { error, status } = await supabase.from('templates').update(patch).eq('id', id)

                if (error) return { error: error.message }

                return { data: status }
            }
        }),
        deleteTemplate: build.mutation<number, string>({
            queryFn: async (id) => {
                const { error, status } = await supabase.from('templates').delete().eq('id', id)

                if (error) return { error: error.message }

                return { data: status }
            }
        })
    })
})

export const {
    useGetTemplatesQuery,
    useCreateTemplateMutation,
    useUpdateTemplateMutation,
    useDeleteTemplateMutation
} = templateApi