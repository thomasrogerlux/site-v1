import React, { FC } from "react";
import Img from "gatsby-image";

interface ImageProps {
    className?: string;
    absolute?: boolean;
    contain?: boolean;
    fluid: any;
}

export const Image: FC<ImageProps> = ({ className, absolute, contain, fluid }) => {
    return (
        <Img
            className={className}
            style={{ position: absolute ? "absolute" : "relative" }}
            imgStyle={{ objectFit: contain ? "contain" : "cover" }}
            fluid={fluid}
        />
    );
};
