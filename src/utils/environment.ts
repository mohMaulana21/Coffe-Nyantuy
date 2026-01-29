const getENV = (env: string) => {
    return import.meta.env[`VITE_${env}`] as string | undefined;
}

export default getENV;