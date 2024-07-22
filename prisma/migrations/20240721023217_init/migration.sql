-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" TEXT,
    "number" INTEGER NOT NULL,
    "isPublished" BOOLEAN NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
