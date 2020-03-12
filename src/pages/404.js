import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";

const NotFoundPage = () => (
    <PrimaryLayout column="col-xs-12">
        <h1 className="mt-5">404- PAGE NOT FOUND</h1>
        <p className="text-center">It looks like nothing was found at this location.</p>
    </PrimaryLayout>
);

export default NotFoundPage;