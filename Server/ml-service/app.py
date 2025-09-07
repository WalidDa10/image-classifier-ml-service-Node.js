from flask import Flask, request, jsonify
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, decode_predictions, preprocess_input
from tensorflow.keras.preprocessing import image
import tensorflow as tf
import numpy as np
import os

 

app = Flask(__name__) 

# Load MobileNetV2 model
model = MobileNetV2(weights="imagenet")


@app.route("/predict", methods=["POST"])

def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]

    # Save temp file
    filepath = os.path.join("uploads", file.filename)
    os.makedirs("uploads", exist_ok=True)
    file.save(filepath)

    # Preprocess image
    img = image.load_img(filepath, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)

    # Predict
    preds = model.predict(x)
    results = decode_predictions(preds, top=3)[0]

    # Format results
    predictions = [
        {"label": label, "confidence": f"{prob*100:.2f}%"}
        for (_, label, prob) in results
    ]

    return jsonify({"success": True, "predictions": predictions})

if __name__ == "__main__":
    app.run(port=5001, debug=True)
