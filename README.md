Date/Time Convert (dc) in the cli
====

Multiple times a week I find myself having to schedule things in different timezones and having the memory of a goldfish
I forget the time offsets, so I created this simple utility to convert a time from one zone to another; it's distinctly
geared towards U.S. timezones at the moment. 

## Usage

```bash
dc --from="0600 EST" --to="UTC"
2015-08-03 10:00
```

The format in the `--from` flag is the only one supported at the moment, I may update it in the future if I have time/need. 
