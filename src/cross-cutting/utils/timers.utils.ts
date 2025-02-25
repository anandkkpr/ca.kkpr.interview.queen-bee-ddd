export const sleep = (ms: number, callback: () => unknown | null) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            if (typeof callback === 'function') callback();

            resolve();
        }, ms * 1000);
    });
}