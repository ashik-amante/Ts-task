interface Book {
    title: string;
    price: number;
}
interface Magazine {
    title: string;
    price: number;
    issue: number;
}
type BookOrMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;