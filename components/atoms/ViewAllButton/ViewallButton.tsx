import Link from "next/link";

interface ViewAllButtonProps {
    btnText: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ btnText }) => {
    return (
        <Link href='/' className='outineBtn'><span>{btnText}</span></Link>
    );
};

export default ViewAllButton;

