
async function getDetails():Promise<any>{
    const data = await new Promise((r)=>{
      setTimeout(r, 5000);
    })
    return data;
}

export default async function Home() {
  const details = await getDetails();
  return (
    <div>
      hello
      {details}
    </div>
  );
}
