class DbConnector {
    constructor(args) {
        this.collection = args.collection;
    }

    async insert(payload) {
        const result = new this.collection(payload);
        await result.save();
        return result;
    }

    async find(filter = {}) {
        const result = await this.collection.find(filter).select('-password');
        return result;
    }

    async findOne(filter = {}) {
        const result = await this.collection.findOne(filter).select('-password');
        return result;
    }

    async findOneAndUpdate(filter, payload) {
        const result = await this.collection.findOneAndUpdate(
            filter,
            { $set: payload },
            { new: true, upsert: false } 
        ).select('-password');
        return result;
    }

    async updateMany(filter, payload) {
        const result = await this.collection.updateMany(
            filter,
            { $set: payload },
            { new: true, upsert: false } 
        ).select('-password');
        return result;
    }

    async deleteOne(filter) {
        const result = await this.collection.deleteOne(filter);
        return result;
    }
    
    async deleteMany(filter) {
        const result = await this.collection.deleteMany(filter);
        return result;
    }

}

module.exports = DbConnector;