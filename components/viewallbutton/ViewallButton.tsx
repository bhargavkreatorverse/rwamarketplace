interface ViewAllButtonProps {
    btnText: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ btnText }) => {
    return (
        <button className='outineBtn'><span>{btnText}</span></button>
    );
};

export default ViewAllButton;

