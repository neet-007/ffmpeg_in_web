/// <reference path="./types/global.d.ts" /
// script.js

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

/**
 * Initialize FFmpeg
 */
async function initFFmpeg() {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }
}

/**
 * Example function to convert a file
 * @param {File} inputFile - The input video file
 * @returns {Promise<Uint8Array>} - Processed output file data
 */
async function convertFile(inputFile) {
    await initFFmpeg();

    // Load the input file into FFmpeg's virtual file system
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(inputFile));

    // Run FFmpeg commands
    await ffmpeg.run('-i', 'input.mp4', 'output.mp4');

    // Read the output file from FFmpeg's file system
    const data = ffmpeg.FS('readFile', 'output.mp4');

    // Return the output file as a Uint8Array
    return data;
}
