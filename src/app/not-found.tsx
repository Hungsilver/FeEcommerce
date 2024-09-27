import React from "react";

async function Notfound() {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="text-red-500">
        <h1 className="text-center">Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    </div>
  );
}

export default Notfound;
