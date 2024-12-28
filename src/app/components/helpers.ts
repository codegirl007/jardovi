import {saveAs} from 'file-saver'

export const downloadFile = async (url: string, filename: string): Promise<void> => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const extension = url.split('.').pop()

    saveAs(blob, `${filename}.${extension}`)
    console.log('All files downloaded successfully')
  } catch (error) {
    console.error('Error downloading files:', error)
  }
}
