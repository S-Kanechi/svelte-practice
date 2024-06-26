/// <reference types="vitest" />

import {sveltekit} from '@sveltejs/kit/vite';
import type {UserConfig} from 'vite';


const config: UserConfig = ({
    plugins: [sveltekit()],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['**/*.vitest.ts'],
    },
});

export default config

