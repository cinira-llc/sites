import type {NextConfig} from "next";
import {exec} from "child_process";
import _ from "lodash";

const config = async (phase: string) => {
    const config: NextConfig = {
        env: {
            BUILD_SOURCE: await new Promise((resolve, reject) => {
                exec("git describe --abbrev=8 --always --dirty --first-parent --long --tags",
                    (err, stdout) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(_.trim(stdout));
                    });
            }),
            BUILD_TIMESTAMP: new Date().toISOString(),
        },
    };
    if ("phase-development-server" !== phase) {
        config.output = "export";
    }
    return config;
}

export default config;
