export interface Trip {
    _id: string,  // internal key for MongoDB
    code: string, // code used by company to id trip
    name: string, // name of place
    length: string,   // length of stay
    start: Date, // data trip starts
    resort: string, // name of resort
    perPerson: string, // Cost
    image: string,
    description: string
}