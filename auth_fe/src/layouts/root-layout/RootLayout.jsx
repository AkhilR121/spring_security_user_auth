const RootLayout = ({children}) =>{
    return (
        <div style={{height: "100px", width: "100px", border: "2px solid red"}}>
            {children}
        </div>
    );
} 

export default RootLayout;