exports.getAllCategories = async (req,res) => {
    const categoryList = await Category.find();
    if(!categoryList) {
        res.status(500).json({success:fale})
    }
    res.send(categoryList);
}