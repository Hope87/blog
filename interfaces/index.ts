export interface IPost {
    title: string;
    excerpt: string;
}

export interface IPhoto {
    url: string;
}

export interface ICategories {
    name: string;
    slug: string;
}

export interface IFeaturedImage {
    url: string;
}

export interface IAuthor {
    bio: string;
    id: string;
    name: string;
    photo: IPhoto
}

export interface INode {
    author: IAuthor;
    categories: ICategories[];
    createdAt: string;
    excerpt: string;
    featuredImage: IFeaturedImage;
    slug: string;
    title: string;
    content: any
}

export interface IPosts {
    node: INode
}

export interface IRelatedPosts {
    createdAt: string;
    featuredImage: IFeaturedImage;
    slug: string;
    title: string;
}

export interface IFeaturedPostCard {
    createdAt: string;
    featuredImage: IFeaturedImage;
    slug: string;
    title: string;
    author: IAuthor
}