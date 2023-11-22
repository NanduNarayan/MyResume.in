import { createTheme } from "@mui/material"

const commonStyleOverrides = {
    MuiCard: {
        styleOverrides: {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "3%",
        }
    },
    MuiSwitch:{
        styleOverrides:{
            root:{
                color:"#fff",
                backgroundColor:"#000",
                "&::checked":{
                    color:"#000",
                    backgroundColor:"#fff",
                }
            },
        }
    },
    MuiDivider:{
        styleOverrides:{
            root:{
                padding:"5px",
            }
        }
    }
}

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        ...commonStyleOverrides,
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundImage: "linear-gradient(to top right, #F8F9FA, #E9ECEF, #DEE2E6)",
                    color: "rgba(52, 58, 64, 0.9)",
                    '&:hover': {
                        boxShadow: "rgba(248, 249, 250, 0.3) 0px 13px 27px -5px, rgba(23, 23, 40, 0.25) 0px 8px 10px -8px inset",
                    },
                },
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundImage: "line-gradient(to left, rgba(248, 249, 250,0.5),55% rgba(33, 37, 41,0.8),rgba(248, 249, 250,0.5))",
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(52, 58, 64,1)"
                }
            }
        },
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: "#F8F9FA",
                }
            }
        },
        MuiTypography:{
            styleOverrides: {
                h2:{
                    color:"#e9ecef",
                }
            }
        }
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    components: {
        ...commonStyleOverrides,
        MuiButton: {
            styleOverrides: {

                contained: {
                    backgroundImage: "linear-gradient(to bottom right,#212529,#343a40,#495057)",
                    color: "rgba(248, 249, 250,0.9)",
                    '&:hover': {
                        boxShadow: "rgba(23, 23, 40, 0.25) 0px 13px 27px -5px, rgba(248, 249, 250,0.3) 0px 8px 10px -8px inset"
                    }
                }
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundImage: "linear-gradient(to left, rgba(33, 37, 41, 0.5), 55% rgba(248, 249, 250, 0.8), rgba(33, 37, 41, 0.5))",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(248, 249, 250, 0.4)",
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: "#212529",
                }
            }
        },
        MuiTypography:{
            styleOverrides: {
                h2:{
                    color:"#343a40",
                },
                
            }
        }
    }
});


