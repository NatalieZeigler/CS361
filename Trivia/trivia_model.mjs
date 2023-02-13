import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const triviaSchema = mongoose.Schema({
    questionText: { type: String},
    viewed: { type: Boolean, default: false }
});


/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Question = mongoose.model("Question", triviaSchema);


const createQuestion = async (questionText, viewed) => {
    const question = new Question({questionText: questionText, viewed: viewed});
    return question.save(); 
}

const findQuestionbyID = async(_id) => {
    const query = Question.findById(_id);
    return query.exec(); 
}

const findQuestions = async(filter, projection, limit) => {
    const query = Question.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec(); 
}

const updateQuestion = async(filter, update) => {
    const result = await Question.updateOne(filter, update);
    return result.modifiedCount;
}

const replaceQuestion = async(_id, questionText, viewed) => {
    const result = await Question.replaceOne({_id: _id}, {questionText: questionText, viewed: viewed});
    return result.modifiedCount; 
}

const deleteById = async (_id) => {
    const result = await Question.deleteOne({_id: _id});
    return result.deletedCount;
}


export {createQuestion, findQuestionbyID, updateQuestion, replaceQuestion, deleteById, findQuestions,}