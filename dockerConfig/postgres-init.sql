CREATE TABLE "articles"(
    "id_article" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" BIGINT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
ALTER TABLE
    "articles" ADD PRIMARY KEY("id_article");
CREATE TABLE "users"(
    "id_user" BIGINT NOT NULL,
    "role" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "firstname" VARCHAR(255) NULL,
    "lastname" VARCHAR(255) NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id_user");
CREATE TABLE "carts"(
    "id_cart" BIGINT NOT NULL,
    "user" BIGINT NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
ALTER TABLE
    "carts" ADD PRIMARY KEY("id_cart");
CREATE TABLE "in_carts"(
    "id_in_cart" BIGINT NOT NULL,
    "cart" BIGINT NOT NULL,
    "article" BIGINT NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
ALTER TABLE
    "in_carts" ADD PRIMARY KEY("id_in_cart");
CREATE TABLE "adress_lists"(
    "id" BIGINT NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "port" INTEGER NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
ALTER TABLE
    "adress_lists" ADD PRIMARY KEY("id");
ALTER TABLE
    "in_carts" ADD CONSTRAINT "in_carts_article_foreign" FOREIGN KEY("article") REFERENCES "articles"("id_article");
ALTER TABLE
    "in_carts" ADD CONSTRAINT "in_carts_cart_foreign" FOREIGN KEY("cart") REFERENCES "carts"("id_cart");
ALTER TABLE
    "carts" ADD CONSTRAINT "carts_user_foreign" FOREIGN KEY("user") REFERENCES "users"("id_user");