import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        idCurso: {
            type: String,
        }
    }
)