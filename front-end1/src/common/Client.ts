import { string } from "prop-types";

export type Genders = 'male' | 'female' | 'other';

const baseUrl: string = 'https://localhost:44331/api';
export const registerURL: string = baseUrl + "/Users/";
export const loginURL: string = baseUrl + "/Users";
export const getUserURL: string = baseUrl + "/Users/";
export const getAdsUrl: string = baseUrl + "/advertisements" ;
export const getCategoriesUrl: string = baseUrl + "/categories"
/**
 * Dtos
 */
export interface Address{
    addressId: number;
    addressString?: string;
    city?: string;
    country?: string;
    longitude?: number;
    latitude?: number;
}

export interface UserLogin {
    email?: string;
    password?: string;
}

export interface UserRegister{
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    gender?: Number;
    DOB?: string;
    phoneNumber?: string;
    address?: Address;
}

export interface User{
    id: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    gender?: Genders;
    DOB?: string;
    phoneNumber?: string;
    address?: Address;
}

export interface Category{
    categoryId: number;
    name?: string;
    description?: string;
}

export interface Tool{
    id: number;
    name?: string;
    techSpec?: string;
    isAvailable?: boolean;
    images?: { imageUrl: string}[]; 
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
    categoryFilter: string | null;
    availableFilter: boolean;
    distanceFilter?: DistanceObject;
}