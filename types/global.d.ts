declare module '@ffmpeg/ffmpeg' {
    export function createFFmpeg(options?: any): any;
    export const fetchFile: (file: string | File | Blob) => Promise<any>;
}
