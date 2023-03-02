import Plate from "./Plate";

export default function Highlights(){
    return (
        <>
            <div>
                <h1>This week specials!</h1>
                <button>Online Menu</button>
            </div>
            <div>
                <Plate source='greek-salad.jpg' alt='Greek Salad' title='Greek Salad' price='12.00$' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla leo, placerat dignissim finibus eu, tristique sed metus. Etiam quam nulla, ornare sit amet diam ' />
                <Plate source='bruschetta.jpg' alt='Bruschetta' title='Bruschetta' price='12.00$' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla leo, placerat dignissim finibus eu, tristique sed metus. Etiam quam nulla, ornare sit amet diam ' />
                <Plate source='lemon-dessert.jpg' alt='Lemon Dessert' title='Lemon Dessert' price='12.00$' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla leo, placerat dignissim finibus eu, tristique sed metus. Etiam quam nulla, ornare sit amet diam ' />
            </div>
        </>
    );
}