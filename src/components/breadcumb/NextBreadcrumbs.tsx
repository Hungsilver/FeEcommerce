// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { useRouter } from 'next/router';
// import React from 'react'

// function NextBreadcrumbs() {
//     const router = useRouter();
//     function generateBreadcrumbs() {
//         // Remove any query parameters, as those aren't included in breadcrumbs
//         const asPathWithoutQuery = router.asPath.split("?")[0];

//         // Break down the path between "/"s, removing empty entities
//         // Ex:"/my/nested/path" --> ["my", "nested", "path"]
//         const asPathNestedRoutes = asPathWithoutQuery.split("/")
//             .filter(v => v.length > 0);

//         // Iterate over the list of nested route parts and build
//         // a "crumb" object for each one.
//         const crumblist = asPathNestedRoutes.map((subpath, idx) => {
//             // We can get the partial nested route for the crumb
//             // by joining together the path parts up to this point.
//             const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
//             // The title will just be the route string for now
//             const title = subpath;
//             return { href, text };
//         })

//         // Add in a default "Home" crumb for the top-level
//         return [{ href: "/", text: "Home" }, ...crumblist];
//     }

//     // Call the function to generate the breadcrumbs list
//     const breadcrumbs = generateBreadcrumbs();

//     return (
//         <Breadcrumbs aria-label="breadcrumb">
//             {breadcrumbs.map((crumb, idx) => (
//                 <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
//             ))}
//         </Breadcrumbs>
//     );
// }

// export default NextBreadcrumbs