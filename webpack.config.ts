import path from 'path';
import webpack from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildPaths, BuildMode, BuildPlatform} from "./config/build/types/types";

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
    }

    return buildWebpack({
        port: env.port ?? 5000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })
};