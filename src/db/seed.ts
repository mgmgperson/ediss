import pool from './db.js';

export async function seedDb(): Promise<void> {
    await pool.execute(`DELETE FROM customers`);
    await pool.execute(`DELETE FROM books`);

    await pool.execute(
        `
        INSERT INTO books (ISBN, title, Author, description, genre, price, quantity, summary)
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?),
        (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
        '9780143105534',
        'The Book of Mormon',
        'Joseph Smith',
        'A religious text of the Latter Day Saint movement.',
        'Fiction',
        67.99,
        10,
        null,

        '9780201616224',
        'The Pragmatic Programmer',
        'Andrew Hunt',
        'A classic software engineering book.',
        'Programming',
        45.00,
        7,
        null,
        ]
    );

    await pool.execute(
        `
        INSERT INTO customers (userId, name, phone, address, address2, city, state, zipcode)
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?),
        (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
        'alice@example.com',
        'Alice Johnson',
        '412-555-1111',
        '123 Main St',
        null,
        'Pittsburgh',
        'PA',
        '15213',

        'bob@example.com',
        'Bob Smith',
        '412-555-2222',
        '456 Fifth Ave',
        'Apt 5B',
        'Pittsburgh',
        'PA',
        '15222',
        ]
    );
}