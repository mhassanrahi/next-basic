import React from "react";
import { useRouter } from "next/router";

const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;

    if (params.length === 1) {
        return <h3>Viewing docs for feature {params[0]}.</h3>;
    } else if (params.length === 2) {
        return (
            <h3>
                Viewing docs for feature {params[0]} and concept {params[1]}.
            </h3>
        );
    }
    return <h3>Docs Home</h3>;
};

export default Docs;
