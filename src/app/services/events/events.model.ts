export class IEvents {
    author: number; // authorId
    date: Date;
    date_utc: string;
    title: string;
    description: string;
    slug: string; // The event slug
    excerpt: string; // The event excerpt
    status: string;
    timezone: string;
    all_day:  boolean; // Whether the event lasts the whole day or not
    start_date: string;
    end_date: string;
    image: string;
    cost: string;
    website: string;
    show_map_link: string;
    hide_from_listings: boolean;
    sticky: boolean;  // Whether the event should be sticky in the calendar view or not
    featured: boolean;
    categories: [number];
    tags: [];
    venue: [number];
    organizer: [number];
}
export class IEventsResponseAll {
    description: string;
    schema?: {
        title: string;
        type: [];
        items: {
            $ref: string;
        }
    }
}
export class IVenues {
    author: number; // authorId
    date: Date;
    date_utc: string;
    venue: string;
    description: string;
    status: string;
    show_map: string;
    show_map_link: string;
    address: string;
    city: string;
    country: string;
    province: string;
    state: string;
    zip: string;
    stateprovince: string;
    phone: string;
    website: string;
    image: string;
}

export class Organizers {
    author: number;
    date: Date;
    date_utc: string;
    organizer: string;
    description: string;
    status: string;
    phone: string;
    image: string;
    email: string;
    website: string;
}
export class ITags {
    id? : number;
    name: string;
    description: string;
    slug: string;
}