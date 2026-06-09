import type { APIRoute} from "astro";
import type GET: APIRoute = async () => {
    return new Response (JSON.stringify({success: true}));
}