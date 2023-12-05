import supabase from "@/app/config/client"
import "server-only";

 export const dynamic = "force-dynamic"; //When this is used in development mode, It seems to work perfectly.
//  OR export const revalidate = 0;
 async function getData() {
    const { data } = await supabase.from("bounty").select()
    return { data };
}

export default async function SSR() {
    const { data } = await getData();
    return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
    // <div key={data.id}></div>

    );
}