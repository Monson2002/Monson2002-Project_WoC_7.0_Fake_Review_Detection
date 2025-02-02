import axios from "axios";

export const postProduct = async ({ url }: { url: string }) => {
  try {
    const response = await axios.get(
      {url}
    )
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
  }
}