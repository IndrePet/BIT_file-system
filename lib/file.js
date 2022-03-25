import fs from 'fs/promises'; // async -> async/await
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

file.fullPath = (dir, fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '../.data', dir, fileName);
};

/**
 * Function that creates a file in the set directory and fills it with initial content
 * @param {string} dir name of the folder which will hold the created file (in `.data` folder)
 * @param {string} fileName name of the file that will be created (must include extension)
 * @param {Object} content content of the newly created file (JS object)
 * @param {string} content.name username
 * @param {number} content.age user's age
 * @returns {Promise<boolean>} status that shows if file creation was successful
 */

file.create = async (dir, fileName, content) => {
  let fileDescriptor = null;
  try {
    const filePath = file.fullPath(dir, fileName);
    fileDescriptor = await fs.open(filePath, 'wx'); // 'wx' - write/fails if path exists
    await fs.writeFile(fileDescriptor, JSON.stringify(content));
    return true;
  } catch (error) {
    return false;
  } finally {
    if (fileDescriptor) {
      await fileDescriptor.close();
    }
  }
};

/**
 * Function that reads the file and returns it's **text content**
 * @param {string} dir name of the folder that holds the file we want to read
 * @param {string} fileName name of the file that will be read (must include extension)
 * @returns {Promise<boolean>} status that shows if reading was successful
 */

file.read = (dir, fileName) => {
  console.log('Skaitomas failas...');
};

file.update = (dir, fileName, content) => {
  console.log('Atnaujinamas failas...');
};
file.delete = (dir, fileName) => {
  console.log('Trinamas failas...');
};

export { file };
