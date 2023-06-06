import Heading from "../Heading/Heading";


const RoomHeader = () => {
    return (
        <>
            <Heading
                title='Lorem Ipsum is simply dummy text'
                subtitle='Zebuti, indonesia'
            ></Heading>
            {/* for showing image */}
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className="object-cover w-full" src="https://www.blurb.com/blog/wp-content/uploads/2020/07/20200717_BookCoversExplained_Inline_Images_v1_02-1024x600.jpg" alt="Header Image" />
            </div>
        </>
    );
};

export default RoomHeader;