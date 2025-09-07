# 🖼️ Image Classifier ML Service

A full-stack AI-powered image classifier built with:

- **Frontend:** React + TailwindCSS
- **Backend:** Node.js + Express
- **ML Service:** Flask + TensorFlow (MobileNetV2)

Users can upload an image from the frontend, which is sent to the backend.  
The backend forwards the image to a Python ML service that uses **MobileNetV2** for classification,  
then returns the predicted labels and confidence scores to the user.

---

## 📌 Features

- Upload images from the React frontend
- Real-time AI-based image classification
- Backend API with Node.js & Express
- Python ML service powered by TensorFlow
- MobileNetV2 model for fast & accurate predictions
- Styled with TailwindCSS for a modern UI

---

## 🧠 About ML model MobileNetV2 used

**MobileNetV2** is a lightweight deep learning model developed by Google,  
optimized for mobile and edge devices.  
It balances **speed and accuracy**, making it ideal for real-time image classification tasks  
without requiring heavy GPU resources.  
In this project, we use **MobileNetV2 pre-trained on ImageNet**,  
so it can recognize **1,000+ common object categories** out of the box.

---

## ⚙️ Tech Stack

- **React.js** (frontend UI)
- **TailwindCSS** (styling)
- **Node.js + Express** (backend API)
- **Flask** (Python microservice)
- **TensorFlow + Keras** (ML model)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/WalidDa10/image-classifier-ml-service-Node.js.git
```

## 👌 Screenshots

![](<Screenshot(1).png)
