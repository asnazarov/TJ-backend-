"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEntity = exports.UserEntity = void 0;
const user_entity_1 = require("./user/entities/user.entity");
Object.defineProperty(exports, "UserEntity", { enumerable: true, get: function () { return user_entity_1.UserEntity; } });
const post_entity_1 = require("./post/entities/post.entity");
Object.defineProperty(exports, "PostEntity", { enumerable: true, get: function () { return post_entity_1.PostEntity; } });
const entities = [user_entity_1.UserEntity, post_entity_1.PostEntity];
exports.default = entities;
//# sourceMappingURL=index.js.map