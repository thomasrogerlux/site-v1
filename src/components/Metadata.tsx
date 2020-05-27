import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

export const Metadata: FC = () => {
    const intl = useIntl();

    return (
        <Helmet>
            <title>{intl.formatMessage({ id: "common.title" })}</title>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};
