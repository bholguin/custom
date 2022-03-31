import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import AxiosInterceptor from "./config/axios";
import type { EntryContext } from "remix";


const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) => {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}


export default AxiosInterceptor(handleRequest) 