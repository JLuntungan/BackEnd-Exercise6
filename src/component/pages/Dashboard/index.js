import React,{useState,useEffect} from 'react' 
import firebase from '../../../config/FireBase'


const Dashboard = () => {

    const [productName ,setProductName] = useState("")
    const [category ,setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [product , setProduct] = useState([])
    const [button , setButton] = useState("Save")
    const [selectedProduct, setSelectedProduct] = useState([])

    useEffect(() => {
        firebase.database()
        .ref("products")
        .on("value",(res)=>{
            if(res.val()){
                //ubah menjadi Array object
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map(item => {
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    });
                }); 
                setProduct(productArr);
            }
        });
    },[]);

 
    const resetForm =()=>{
        setProductName("");
        setCategory("");
        setPrice("");
        setButton("Save");
        setSelectedProduct({});
    };

    const onSubmit=()=>{
        const data = {
            productName: productName,
            category :category,
            price:price,
        }
        if(button === 'Save'){
            //insert
            firebase.database().ref('products').push(data);
        } else{
            //update
            firebase.database().ref(`products/${selectedProduct.id}`).set(data);
        }
        resetForm();
    }

    const onUpdateData =(item) =>{
        setProductName(item.productName);
        setCategory(item.category);
        setPrice(item.price);
        setButton("Update");
        setSelectedProduct(item);
    };

    const onDeleteData =(item) =>{
        firebase.database().ref(`products/${item.id}`).remove()
    }

    return(
        <div className="container mt-5">
        <h3>Dashboard</h3>
            <div className="col-6">
                <p>Product Name</p>
                <input 
                    className="form-control" 
                    placeholder="Type your product name" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)}></input>
                <p>Category</p>
                <input 
                    className="form-control"
                    placeholder="type the category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}></input>
                <p>Price</p>
                <input 
                    className="form-control" 
                    placeholder="type the price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}></input>
                <br></br>
                <button className="btn btn-dark" onClick={onSubmit}> {button} </button>
                {
                    button === "Update" && (
                        <button className="btn btn-light" onClick={resetForm}>Cancel Update</button>
                    )
                }

            </div>
            <hr></hr>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>onUpdateData(item)}>Update</button>
                                    <button className="btn btn-danger" onClick={()=>onDeleteData(item)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;