import axios from "axios";

export function makePOSTRequest<RequestType, ResponseType>(
  url: string,
  body: RequestType,
  onSuccess: (response: ResponseType) => void,
  onError: (error: Error) => void
): Promise<ResponseType> {
  const requestPromise = new Promise<ResponseType>((resolve, reject) => {
    axios
      .post(url, body)
      .then((response) => {
        const responseBody = response.data as ResponseType;
        resolve(responseBody);
        onSuccess(responseBody);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
        onError(error);
      })
      .then(() => {
        console.log("Executed REST POST call to " + url);
      });
  });

  return requestPromise;
}
