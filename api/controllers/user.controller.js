import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)

            if (req.userId !== user._id.toString()) {
                return next(createError(401, "You can only delete your account!"));
            }

            await User.findByIdAndDelete(req.params.id);
            return res.status(200).send("Account has been deleted");
}
