from pathlib import Path
import sqlite3

TABLE = 'USERS'

# Connect to the database
conn = sqlite3.connect((Path('instance') / 'gogreen').with_suffix('.db'))
cursor = conn.cursor()

# Query the users table
cursor.execute(f'SELECT * FROM {TABLE}')
rows = cursor.fetchall()

# Print the results
for row in rows:
    print(row)

# Close the connection
cursor.close()
conn.close()
