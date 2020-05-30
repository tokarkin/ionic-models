export class IPost{
    id: number;
    date: Date;
    date_gmt: Date;
    guid: {
        /**  return html "https://dividiva.com/annuaire/?p=239", but this you don`t needed */
        rendered: string
    };
    modified: Date;
    slug: string;
    status: StatusPost;
    link: string;    /**  return html "https://ukspiritualdirectory.co.uk/gong-baths/", but this you don`t needed */
    title: {
        rendered: string;
    };
    content: {
        /**  return html */
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        /**  return html */
        rendered: string;
        protected: boolean;
    };
    author: number; // authorID
    featured_media: number;
    comment_status: string; // open
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        _et_pb_use_builder: string;
        _et_pb_old_content: string;
        _et_gb_content_width: string;
    };
    categories: [
        number // categoriesID
    ];
    tags: [];
    yoast_head: string; // html don`t need to us
    _links: any; // relations
}
export enum StatusPost {
    publish = 'publish',
    future = 'future',
    draft = 'draft',
    pending = 'pending',
    private = 'private',
    trash = 'trash',
    autoDraft = 'auto-draft',
    inherit = 'inherit',
    requestPending = 'request-pending,',
    requestConfirmed = 'requestConfirmed',
    requestFailed = 'request-failed',
    requestCompleted = ' request-completed',
    tribeEaSuccess = 'tribe-ea-success',
    tribeEaFailed = 'tribe-ea-failed',
    tribeEaSchedule = 'tribe-ea-schedule',
    tribeEaPending = 'tribe-ea-pending',
    tribeEaDraft = 'tribe-ea-draft',
    tribeIgnored = ' tribe-ignored',
    any = 'any',
}
export class ICreatePost {
    id?: number;
    date: Date; // The date the object was published, in the site's timezone. can be string or null
    date_gmt: Date; // The date the object was published, as GMT. can be string or null
    slug: string; // it`s like title very short description
    status: StatusPost;
    password: string; // A password to protect access to the content and excerpt.
    title: {
        rendered: string;
    };
    author: number; // authorId
    excerpt: {
          /**  return html, which we will use when all post shown(short-description)
        and you need to use DOMparser https://stackoverflow.com/questions/47802488/domparser-typescript-parsing-html */
        rendered: string;
        protected: boolean;
    };
    featured_media: number; // The ID of the featured media for the object.
    comment_status: ICommentStatus;
    ping_status: IPingStatus;  // "Whether or not the object can be pinged.
    format: IFormat;
    meta: {
        _et_pb_use_builder: string; // this fields empty string
        _et_pb_old_content: string;
        _et_gb_content_width: string;
    };
    sticky: boolean; // Whether or not the object should be treated as sticky.
    template: string; // empty string;
    categories: [ number]; // categoryId
    tags: []; // as i see it always empty, but the subscription to this field is 'The terms assigned to the object in the post_tag taxonomy'
}

export enum ICommentStatus {
    OPEN = 'open',
    CLOSED = 'closed',
}

export enum IPingStatus {
    OPEN = 'open',
    CLOSED = 'closed',
}
export enum IFormat {
    standart = 'standard',
    aside =  'aside',
    chat = 'chat',
    gallery = 'gallery',
   link = 'link',
    image = 'image',
    quote = 'quote',
    status = 'status',
    video = 'video',
    audio = 'audio'
}
export enum ISortBy {
    author = 'author',
    date = 'date',
    id = 'id',
    include = 'include',
    modified = 'modified',
    parent = 'parent',
    relevance = 'relevance',
    slug = 'slug',
    includeSlugs = 'include_slugs',
    title = 'title'
}
