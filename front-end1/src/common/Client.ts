import { string } from "prop-types";

export type Genders = 'male' | 'female' | 'other';

const baseUrl: string = 'https://localhost:44331/api';
export const getAdsUrl: string = baseUrl + "/Advertisements" ;
export const getCategoriesUrl: string = baseUrl + "/categories";
/**
 * Dtos
 */
export interface Address{
    id: number;
    addressDetails?: string;
    city?: string;
    country?: string;
    longitude?: number;
    latitude?: number;
}

export interface User{
    id: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    gender?: Genders;
    DOB?: string;
    phoneNumber?: string;
    address?: Address;
}

export interface Category{
    id: number;
    name?: string;
    description?: string;
}

export interface Tool{
    id: number;
    name?: string;
    techSpec?: string;
    isAvailable?: boolean;
    imageUrls?: string[]; 
}

export interface Advertisement{
    id: number;
    title?: string;
    description?: string;
    type?: string;
    address?: Address;
    tool?: Tool;
    ownersName?: string;
    category?: Category;
    periodOfTime?: number;
    rentalConditions?: string;
    returnRequirements?: string;
}

export interface DistanceObject{
    location: Address;
    distance: number;
}

export interface FilterObject {
    searchFilter: string | null;
    categoryFilter: Category | null;
    availableFilter: boolean;
    distanceFilter?: DistanceObject;
}