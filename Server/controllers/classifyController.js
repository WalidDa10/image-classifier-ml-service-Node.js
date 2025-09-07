import axios from "axios";
import fs from "fs"
import FormData from "form-data";
/**----------------------------------------------------
 * @description upload & classify
 * @route /api/classify
 * @method Post
 * @access public 
 -----------------------------------------------------*/


 export const classifyCtrl = async(req , res) =>{
    try {
        // 1.Validation for image
            if (!req.file) {
                return res.status(400).json({
                    message: "No image Provided"
                 })
            }
        const imagePath = req.file.path;
        
        // Send image to ML service
        const formData = new FormData();
        formData.append("image", fs.createReadStream(imagePath));
    
        const response = await axios.post("http://localhost:5001/predict", formData, {
          headers: formData.getHeaders(),
        });
    
        res.json(response.data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Classification failed" });
      }
 }