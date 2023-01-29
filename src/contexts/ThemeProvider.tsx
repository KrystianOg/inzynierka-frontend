import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkProps } from "@mui/material";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import React from "react";
import { useMemo } from "react";
import { useDarkMode } from "usehooks-ts";

type Props = {
	children: React.ReactNode;
};

// prettier-ignore
const LinkBehavior = React.forwardRef<
    HTMLAnchorElement, 
    Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>(
	(props, ref) => {
		const { href, ...other } = props;
		// Map href (MUI) to (react-router)
		return <RouterLink to={href} ref={ref} {...other} />;
	}
);

LinkBehavior.displayName = "LinkBehavior";

// prettier-ignore
const getDesignTokens = (mode: "light" | "dark") => ({
	palette: {
		mode,
		...(mode === "light"
			? {
                primary: {
                    light: 'hsl(25, 100%, 83%)',
                    main: 'hsl(27, 100%, 62%)',
                    dark: 'hsl(14, 100%, 57%)',
                    contrastText: '#FBFBFB'
                },
                secondary: {
                    light: 'hsl(159, 100%, 87%)',
                    main: 'hsl(158, 86%, 50%)',
                    dark: 'hsl(154, 96%, 31%)',
                },
                background: {
                    default: '#FBFBFB',
                    paper: '#E8E8E8'
                },
                text: {
					primary: '#000000',
					secondary: '#333333',
				},

			}
			: {
				// palette values for dark mode
                primary: {
                    light: 'hsl(25, 100%, 83%)',
                    main: 'hsl(27, 100%, 62%)',
                    dark: 'hsl(14, 100%, 57%)',
                    contrastText: '#FBFBFB'
                },
                secondary: {
                    light: 'hsl(159, 100%, 87%)',
                    main: 'hsl(158, 86%, 50%)',
                    dark: 'hsl(154, 96%, 31%)',
                },
                background: {
                    default: '#000A06',
                    paper: '#000604'
                },				
                text: {
					primary: '#ffffff',
					secondary: '#dddddd',
				},
			}
		),
	},
    shape: {
        borderRadius: 16
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior
            } as LinkProps
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior
            }
        }
    }
});

const ThemeProvider = ({ children }: Props) => {
	const { isDarkMode } = useDarkMode();

	const theme = useMemo(() => createTheme(getDesignTokens(isDarkMode ? "dark" : "light")), [isDarkMode]);

	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
