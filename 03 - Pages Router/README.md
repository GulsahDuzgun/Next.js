#### What did I learn while coding this project?

> #
>
> - _In Pages Router all components are Client Components. We don't have RSC arhitecture or Server Component. We can use hooks anywhere if we want. All components will be server-side rendered once and then HTML is sent to the browser and it's hydrated ,_
> - _If we want a static route, we fetch data in the server with getStaticProps. The data will be fetched in the server only once at build time. This is very useful if the data that we want to render changes very rarely. On the other hand, if the data changes very frequently or is bound to a certain user we need a dynamic route. That case we fetch the data with fetServerSideProps._
> - _We can also implement incremental static regeneration in the Pages Router giving a second revalidate property in return object of getStaticProps._
