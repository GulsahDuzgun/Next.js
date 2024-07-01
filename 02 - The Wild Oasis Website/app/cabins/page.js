export default async function Page() {
  //top level async on server
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h2>cabins</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
