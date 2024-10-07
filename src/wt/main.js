import { Worker } from "worker_threads";
import { cpus } from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "worker.js");

const createWorkerPromise = (workerData) => {
  return new Promise((resolve) => {
    const worker = new Worker(filePath, { workerData });

    worker.on("message", (message) => {
      resolve({ status: "resolved", data: message });
    });

    worker.on("error", () => {
      resolve({ status: "error", data: null });
    });
  });
};

const performCalculations = async () => {
  const numThreads = cpus().length;
  const workerPromises = Array.from({ length: numThreads }, (_, i) => createWorkerPromise(i + 10));

  const settledPromises = await Promise.allSettled(workerPromises);
  const results = settledPromises.map(({ value }) => value);

  console.log(results);
};

await performCalculations();
